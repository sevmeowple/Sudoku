/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { base } from '$app/paths';
import exp from 'constants';

// place files you want to import through the `$lib` alias in this folder.
const BASE64: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-';

function createBoard(): number[][] {
	const board: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
	fill_diagonal(board);
	fill_remaining(board, 0, 3);
	return board;
}

function fill_diagonal(board: number[][]): void {
	for (let i = 0; i < 9; i += 3) {
		fill_box(board, i, i);
	}
}

function fill_box(board: number[][], row: number, col: number): void {
	const nums: number[] = Array.from({ length: 9 }, (_, i) => i + 1);
	nums.sort(() => Math.random() - 0.5);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			board[row + i][col + j] = nums.pop()!;
		}
	}
}

function fill_remaining(board: number[][], i: number, j: number): boolean {
	if (j >= 9 && i < 8) {
		i++;
		j = 0;
	}
	if (i >= 9 && j >= 9) {
		return true;
	}
	if (i < 3) {
		if (j < 3) {
			j = 3;
		}
	} else if (i < 6) {
		if (j === Math.floor(i / 3) * 3) {
			j += 3;
		}
	} else {
		if (j === 6) {
			i++;
			j = 0;
			if (i >= 9) {
				return true;
			}
		}
	}
	for (let num = 1; num <= 9; num++) {
		if (is_safe(board, i, j, num)) {
			board[i][j] = num;
			if (fill_remaining(board, i, j + 1)) {
				return true;
			}
			board[i][j] = 0;
		}
	}
	return false;
}

function is_safe(board: number[][], row: number, col: number, num: number): boolean {
	for (let x = 0; x <= 8; x++) {
		if (board[row][x] === num || board[x][col] === num) {
			return false;
		}
	}
	const startRow = Math.floor(row / 3) * 3;
	const startCol = Math.floor(col / 3) * 3;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i + startRow][j + startCol] === num) {
				return false;
			}
		}
	}
	return true;
}

function print_board(board: number[][]): void {
	for (let i = 0; i < 9; i++) {
		console.log(board[i]);
	}
}

function solve(board: number[][]): boolean {
	let empty: number[] = find_empty_location(board);
	if (empty[0] === -1) {
		return true;
	}
	let row: number = empty[0];
	let col: number = empty[1];
	for (let num = 1; num <= 9; num++) {
		if (is_safe(board, row, col, num)) {
			board[row][col] = num;
			if (solve(board)) {
				return true;
			}
			board[row][col] = 0;
		}
	}
	return false;
}

function find_empty_location(board: number[][]): number[] {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				return [i, j];
			}
		}
	}
	return [-1, -1];
}

function count_solutions(board: number[][]): number {
	let solution_board: number[][] = board.map((row) => row.slice());
	return solve_count(solution_board);
}

function solve_count(board: number[][]): number {
	let empty: number[] = find_empty_location(board);
	if (empty[0] === -1) {
		return 1;
	}
	let row: number = empty[0];
	let col: number = empty[1];
	let count: number = 0;
	for (let num = 1; num <= 9; num++) {
		if (is_safe(board, row, col, num)) {
			board[row][col] = num;
			count += solve_count(board);
			if (count > 1) {
				return count;
			}
			board[row][col] = 0;
		}
	}
	return count;
}

function remove_numbers(board: number[][], num_holes: number) {
	// 另一种难度实现方式
	// while (attempts > 0) {
	// 	let row: number = Math.floor(Math.random() * 9);
	// 	let col: number = Math.floor(Math.random() * 9);
	// 	while (board[row][col] === 0) {
	// 		row = Math.floor(Math.random() * 9);
	// 		col = Math.floor(Math.random() * 9);
	// 	}
	// 	let backup: number = board[row][col];
	// 	board[row][col] = 0;
	// 	let board_copy: number[][] = board.map((row) => row.slice());
	// 	if (count_solutions(board_copy) !== 1) {
	// 		board[row][col] = backup;
	// 		attempts--;
	// 	}
	// }
	let attempts: number = 0;
	while (num_holes > 0 && attempts < 81) {
		let row: number = Math.floor(Math.random() * 9);
		let col: number = Math.floor(Math.random() * 9);
		if (board[row][col] === 0) {
			attempts++;
			continue;
		}
		let backup: number = board[row][col];
		board[row][col] = 0;
		let board_copy: number[][] = board.map((row) => row.slice());
		if (count_solutions(board_copy) !== 1) {
			board[row][col] = backup;
			attempts++;
		} else {
			num_holes--;
		}
	}
}

function generate_sudoku(difficulty: string): number[][] {
	let board: number[][] = createBoard();
	let base_holes: number = 30;
	console.log(difficulty);
	if (difficulty == '0') {
		base_holes = 30;
	}
	if (difficulty == '1') {
		base_holes = 40;
	}
	if (difficulty == '2') {
		base_holes = 50;
	}
	if (difficulty == '3') {
		base_holes = 60;
	}
	// -3 to 3
	let modifier: number = Math.floor(Math.random() * 7) - 3;
	let num_holes: number = base_holes + modifier;
	console.log(num_holes);
	remove_numbers(board, num_holes);
	return board;
}

function board_to_base64_seed(board: number[][]): string {
	let flattened: string = '';
	for (let row of board) {
		flattened += row.join('');
	}
	let num = BigInt(flattened);
	let base64Str = base10_to_base64(num);
	return base64Str;
}

function base10_to_base64(num: bigint): string {
	let base64: string = '';
	if (num === 0n) {
		return BASE64[0];
	}
	while (num > 0n) {
		base64 = BASE64[Number(num % 64n)] + base64;
		num = num / 64n;
	}
	return base64;
}

function base64_seed_to_board(seed: string): number[][] {
	let num = base64_to_base10(seed);
	let flattened = num.toString().padStart(81, '0');
	let board: number[][] = [];
	for (let i = 0; i < 81; i += 9) {
		let row = flattened
			.slice(i, i + 9)
			.split('')
			.map(Number);
		board.push(row);
	}
	return board;
}

function base64_to_base10(base64: string): bigint {
	let num: bigint = 0n;
	for (let i = 0; i < base64.length; i++) {
		num = num * 64n + BigInt(BASE64.indexOf(base64[i]));
	}
	return num;
}

function solve_board(board: number[][]): number[][] {
	let solution_board: number[][] = board.map((row) => row.slice());
	solve(solution_board);
	return solution_board;
}

export { generate_sudoku, board_to_base64_seed, base64_seed_to_board, print_board, solve_board };
