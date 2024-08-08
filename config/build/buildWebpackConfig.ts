import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    // Тип сборки (при development нет минификации кода)
    mode,
    //корневой файл js
    entry: paths.entry,
    // файл и путь для сборки
    output: {
      filename: "[name].[contenthash].js", // В скобках для динамического обзывания файла в зависимости от entry. contenthash для обхода кэширования браузера
      path: paths.build,
      clean: true, // Для очистки старых сборок при новой
    },
    plugins: buildPlugins(paths.html),
    module: {
      // Конфигурация лоадеров для обработки файлов (не JS)
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}
