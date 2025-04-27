import webpack from 'webpack';
import path from 'path';
import { BuildPath } from '../buildConfig/types/config';
import { BuildCssLoaders } from '../buildConfig/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const newConfig = { ...config };

    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    newConfig.plugins?.push(
        new webpack.ProvidePlugin({
            React: 'react',
        }),
    );
    newConfig.resolve?.modules?.push(paths.src);
    newConfig.resolve?.extensions?.push('.ts', '.tsx');

    newConfig.module.rules = newConfig.module?.rules?.map((rule) => {
        if (rule && typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('.svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    newConfig.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    newConfig.module?.rules.push(BuildCssLoaders(true));

    return newConfig;
};
