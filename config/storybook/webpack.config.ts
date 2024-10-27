import webpack from 'webpack';
import {BuildPath} from "../buildConfig/types/config";
import path from "path";
import {BuildCssLoaders} from "../buildConfig/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) =>  {
    const paths: BuildPath= {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.plugins.push(
        new webpack.ProvidePlugin({
            React: 'react'
        })
    )
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(BuildCssLoaders(true))

    return config;
}