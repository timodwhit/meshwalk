import pkg from './package.json' assert { type: 'json' };
import rollupReplace from '@rollup/plugin-replace';
import rollupTypescript from '@rollup/plugin-typescript';
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from 'typescript';

const globals = {
    'three': 'THREE'
};

const license = `/*!
 * ${ pkg.name }
 * https://github.com/${ pkg.repository }
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */`;

export default {
	input: 'src/index.ts',
	output: [
		{
			format: 'umd',
			name: 'CameraControls',
			file: pkg.main,
			banner: license,
			indent: '\t',
			globals,
		},
		{
			format: 'es',
			file: pkg.module,
			banner: license,
			indent: '\t',
			globals
		}
	],
	external: [
		'three',
	],
	plugins: [
		rollupReplace( { preventAssignment: true, __VERSION: pkg.version } ),
		rollupTypescript( { typescript } ),
		nodeResolve(),
	],
};
