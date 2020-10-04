module.exports = {
    onPreBuild: async ({ utils: { build, status, cache, run, git } }) => {
        try {
            await run.command('eslint src/js/**')
        } catch (e) {
            return build.failBuild('Build Failed', e)
        }
    },
}
