import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //  расширение тех файлов, при импорте которых не нужно указывать расширения
  };
}
