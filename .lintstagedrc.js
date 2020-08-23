module.exports = {
	"*.{js,ts,tsx}": [
		"eslint --fix",
		() => "tsc --noEmit", // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
		"git add"
	]
}
