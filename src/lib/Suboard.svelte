<script lang="ts">
	import {
		generate_sudoku,
		base64_seed_to_board,
		board_to_base64_seed,
		print_board,
		solve_board
	} from '$lib';
	import { onMount } from 'svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	// export let board: number[][];
	let bye = ['小试牛刀,轻松拿下', '初窥门径,游刃有余', '驾轻就熟,炉火纯青', '大师!'];
	let win = false;
	let byenum = 0;
	let seed = '';
	const BASE64: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-';
	// 测试
	let begin: boolean = false;
	let board: number[][] = [];
	let difficulty: string = '0';
	let userBoard: number[][] = [];
	let solvedBoard: number[][] = [];

	let selectedCell = { row: -1, col: -1 };

	// 计时器
	let interval: string | number | NodeJS.Timeout | undefined;
	let time = 0;
	function startTimer() {
		interval = setInterval(() => {
			time++;
		}, 1000);
	}

	function stopTimer() {
		clearInterval(interval);
		interval = undefined;
	}

	function resetTimer() {
		stopTimer();
		time = 0;
	}

	function selectCell(row: number, col: number) {
		selectedCell = { row, col };
	}
	function Regenrate() {
		// console.log(difficulty);
		board = generate_sudoku(difficulty);
		solvedBoard = solve_board(board);
		userBoard = board.map((row) => row.slice());
		begin = true;
		win = false;
		// heihei把solve_board发到f12,开个小后门
		console.log(solvedBoard);
		resetTimer();
		startTimer();
	}
	function ReSeed() {
		board = base64_seed_to_board(seed);
		solvedBoard = solve_board(board);
		userBoard = board.map((row) => row.slice());
		begin = true;
		win = false;
		resetTimer();
		startTimer();
		console.log(solvedBoard);
	}

	// 定义一个获取单元格的类名的方法
	function getCellClass(row: number, col: number): string {
		const cellEl = document.querySelector(`#cell-${row}-${col}`);
		if (cellEl) {
			cellEl.classList.remove('correct');
			cellEl.classList.remove('incorrect');
		}
		if (board[row][col] === 0) {
			if (userBoard[row][col] === solvedBoard[row][col]) {
				return 'correct';
			} else if (userBoard[row][col] !== 0) {
				return 'incorrect';
			}
			return 'empty';
		}
		return 'filled';
	}

	function checkWinCondition() {
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (userBoard[i][j] !== solvedBoard[i][j]) {
					return false; // 如果发现一个不匹配的值，就不需要继续检查了
				}
			}
		}
		byenum = parseInt(difficulty);

		console.log('Congratulations! You have solved the puzzle.');

		stopTimer();
		return true; // 如果所有值都匹配，设置 win 为 true
	}

	function setCellValue(value: number) {
		if (selectedCell.row !== -1 && selectedCell.col !== -1) {
			userBoard[selectedCell.row][selectedCell.col] = value;
			if (value === solvedBoard[selectedCell.row][selectedCell.col]) {
				// 正确填写
				const cellElement = document.querySelector(`#cell-${selectedCell.row}-${selectedCell.col}`);
				if (cellElement) {
					cellElement.classList.remove('incorrect');
					cellElement.classList.add('correct');
				}
			} else {
				// 错误填写
				const cellElement = document.querySelector(`#cell-${selectedCell.row}-${selectedCell.col}`);
				if (cellElement) {
					cellElement.classList.remove('correct');
					cellElement.classList.add('incorrect');
				}
			}
		}

		win = checkWinCondition();
		selectedCell = { row: -1, col: -1 };
	}

	$: if (board.length) {
		solvedBoard = solve_board(board);
	}
	$: cellClasses = board.map((row, rowIndex) =>
		row.map((cell, colIndex) => getCellClass(rowIndex, colIndex))
	);

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('td')) {
			selectedCell = { row: -1, col: -1 }; // Reset selection when clicking outside
		}
	}

	function tobegin() {
		begin = false;
		seed = '';
	}

	function getSeed() {
		seed = board_to_base64_seed(board);
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

{#if win}
	<h1>{bye[byenum]}</h1>
{/if}

{#if begin}
	<div class="timer">
		{time} 秒
	</div>
	<table>
		{#each userBoard as row, rowIndex}
			<tr>
				{#each row as cell, colIndex}
					<td
						id={`cell-${rowIndex}-${colIndex}`}
						class={`cell ${cellClasses[rowIndex][colIndex]} 
                    ${rowIndex % 3 === 0 ? 'top-bold' : ''} 
                    ${rowIndex % 3 === 2 ? 'bottom-bold' : ''} 
                    ${colIndex % 3 === 0 ? 'left-bold' : ''} 
                    ${colIndex % 3 === 2 ? 'right-bold' : ''}`}
						on:click={() => selectCell(rowIndex, colIndex)}
					>
						{cell === 0 ? '' : cell}
						{#if selectedCell.row === rowIndex && selectedCell.col === colIndex}
							<div class="number-selector">
								{#each Array.from({ length: 9 }, (_, i) => i + 1) as num}
									<div on:click={() => setCellValue(num)}>{num}</div>
								{/each}
							</div>
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
{/if}
{#if begin === false}
	<button class="btn variant-glass-primary btn_sudo" on:click={Regenrate}>开始</button>
	<select class="select sel_sudo" bind:value={difficulty}>
		<option value="0">简单</option>
		<option value="1">中等</option>
		<option value="2">困难</option>
		<option value="3">进阶</option>
	</select>
	<div class="seed_div">
		<input
			type="text"
			class="variant-glass-primary seed_input"
			bind:value={seed}
			placeholder="看看你的种子"
		/>
		<button class="btn variant-glass-primary" on:click={ReSeed}>生成</button>
	</div>
{:else}
	<button class="btn variant-glass-primary ma_btn" on:click={Regenrate}>新开始</button>
	<button class="btn variant-glass-primary ma_btn" on:click={getSeed}>获取种子</button>
	<button class="btn variant-glass-primary ma_btn" on:click={tobegin}>返回</button>
	<CodeBlock language="txt" code={seed} buttonCopied="复制好了,快去试试分享吧" />
{/if}

<style>
	.btn_sudo {
		margin: 10px;
	}

	.empty {
		background-color: #f0f0f0;
	}
	.filled {
		background-color: #d3d3d3;
		pointer-events: none;
	}
	.correct {
		background-color: #a9d5aa;
		color: #4caf50; /* 绿色 */
		pointer-events: none;
	}
	.incorrect {
		background-color: #f6b9bb;
		color: #f44336; /* 红色 */
	}
	table {
		border-collapse: collapse; /* 去除表格边框间的间隙 */
		/* 暖色阴影 */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
	td {
		width: 40px; /* 宽度 */
		height: 40px; /* 高度 */
		min-width: 40px; /* 最小宽度 */
		min-height: 40px; /* 最小高度 */
		text-align: center;
		border: 1px solid #ccc; /* 淡灰色 */
		font-size: 1.5em;
		line-height: 40px; /* 行高等于单元格高度 */
		color: #333; /* 深灰色 */
		position: relative; /* 相对定位 */
		cursor: pointer; /* 鼠标指针 */
	}
	.number-selector {
		position: absolute; /* 绝对定位 */
		top: 50%; /* 单元格中心 */
		left: 50%; /* 单元格中心 */
		transform: translate(-50%, -50%); /* 向左上移动 */
		width: 120px; /* 3 * 40px */
		height: 120px; /* 3 * 40px */
		background-color: white;
		border: 1px solid #ccc; /* 淡灰色 */
		display: grid; /* 使用网格布局 */
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影 */
		z-index: 1; /* 层叠顺序 */
	}
	.number-selector div:hover {
		background-color: #f0a500; /* 鼠标悬停时的背景色 */
	}

	.number-selector div {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ccc; /* 淡灰色 */
		cursor: pointer; /* 鼠标指针 */
	}
	.bold-border {
		border: 2px solid #666; /* 加粗边框颜色 */
	}
	.top-bold {
		border-top: 2px solid #666; /* 上边框加粗 */
	}
	.bottom-bold {
		border-bottom: 2px solid #666; /* 下边框加粗 */
	}
	.left-bold {
		border-left: 2px solid #666; /* 左边框加粗 */
	}
	.right-bold {
		border-right: 2px solid #666; /* 右边框加粗 */
	}

	.sel_sudo {
		width: 100px;
	}
	/* 圆角,placehoder的颜色为灰色 */
	.seed_input {
		width: 200px;
		border-radius: 10px;
		margin: 5px;
		padding: 5px;
	}
	/* 选中后颜色和阴影,暖色 */
	.seed_input:focus {
		outline: none;
		box-shadow: 0 0 10px #a47000;
		border: 1px solid #a06e00;
	}
	.seed_div {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px;
	}
	.ma_btn {
		margin: 5px;
	}
</style>
