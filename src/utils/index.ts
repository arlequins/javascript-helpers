const escapeRegExp = (str: any) => {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}

export const replaceAll = (str: string, find: string, replace: string) => {
	if (str && find && replace) {
		return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
	} else {
		return str
	}
}
