<script lang="ts">
	import Suboard from '$lib/Suboard.svelte';
</script>

<footer>
	<p>
		Sudoku Game By <a href="https://sevmeowple.github.io" style="color:pink">SevMeowple </a>
		<a href="https://github.com/sevmeowple" class="git_a">
			<button type="button" class="btn-github btn-icon variant-filled btn-icon-sm"
				><svg
					class="icon-github"
					viewBox="0 0 512 512"
					xml:space="preserve"
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 512 512"
					><path
						d="M256 32C132.3 32 32 134.8 32 261.7c0 101.5 64.2 187.5 153.2 217.9 11.2 2.1 15.3-5 15.3-11.1 0-5.5-.2-19.9-.3-39.1-62.3 13.9-75.5-30.8-75.5-30.8-10.2-26.5-24.9-33.6-24.9-33.6-20.3-14.3 1.5-14 1.5-14 22.5 1.6 34.3 23.7 34.3 23.7 20 35.1 52.4 25 65.2 19.1 2-14.8 7.8-25 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 6.1 4 13.3 15.4 11C415.9 449.1 480 363.1 480 261.7 480 134.8 379.7 32 256 32z"
						fill-rule="evenodd"
						clip-rule="evenodd"
						fill="#ffa1a1"
						class="fill-000000"
					></path></svg
				></button
			></a
		>
	</p>
</footer>
<div class="page">
	<main class="board_main">
		<Suboard />
	</main>
</div>

<style>
	/* 覆盖整个页面作为页面载体 */
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 90vh;
	}
	/* 居中,放在整个页面中心 */
	.board_main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* footer */
	footer {
		display: flex;
		justify-content: center; /* 水平居中 */
		align-items: center;
		height: 50px; /* 设置 footer 的高度 */
	}
	.btn-github {
		/* background-color: #000; */
		/* color: #fff; */
		width: 25px;
		height: 25px;
	}
	.icon-github {
		width: 100%;
		height: 100%;
	}
	/* a里面元素居中使button居中 */
	.git_a{
		display: flex;
		align-items: center;
		
	}
	/* footer-p,p中的字居中+垂直居中,footer放到div的最上面 */
	footer p {
		display: flex;
		align-items: center;
		text-align: center;
		top: 0;
	}
	/* footer-btn,btn两端增加些许间隔 */
	footer button {
		margin: 0 10px;
	}
</style>
