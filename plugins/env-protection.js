export const EnvProtection = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool === "read" && String(output.args.filePath ?? "").includes(".env")) {
        throw new Error("Do not read .env files")
      }
    },
  }
}

export default EnvProtection
