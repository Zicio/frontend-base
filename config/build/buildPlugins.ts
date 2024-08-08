import HtmlWebpackPlugin from "html-webpack-plugin";

import { ProgressPlugin, WebpackPluginInstance } from "webpack";

export function buildPlugins(pathHtml: string): WebpackPluginInstance[] {
  return [
    //  Для включения в сборку HTML
    new HtmlWebpackPlugin({
      template: pathHtml, // Путь к файлу HTML, используемый как шаблон
    }),
    //  Для индикации прогресса сборки
    new ProgressPlugin(),
  ];
}
