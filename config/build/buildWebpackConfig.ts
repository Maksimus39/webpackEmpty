import {BuildOptions} from "./types/types";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlagins";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (option: BuildOptions): webpack.Configuration => {

    const {mode, paths} = option;


    return {
        entry: paths.entry,
        mode: mode,
        output: {
            filename: '[contenthash].[name].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        devServer: buildDevServer(option),
        devtool: 'inline-source-map',
        resolve: buildResolvers(),
        plugins: buildPlugins(paths),
    }
}