import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

//  Если не используем TS - нужен babel-loader
export function buildLoaders(isDev: boolean): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:3]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка для нахождения ts файлов
    use: "ts-loader", // сам лоадер
    exclude: /node_modules/, // исключение папок
  };
  return [typescriptLoader, cssLoader];
}
