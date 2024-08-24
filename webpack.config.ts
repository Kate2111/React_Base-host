import webpack from 'webpack';
import {buildWebpackConfig} from "./config/buildConfig/buildWebpackConfig";
import {BuildOptions, BuildPath} from "./config/buildConfig/types/config";
import path from "path";

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development';

const options: BuildOptions = {
    mode: 'development',
    paths,
    isDev
}

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;
