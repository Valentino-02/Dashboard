const getNames = (sessionData: any) => {
    if (sessionData) {
        const names = sessionData.user?.name?.split(" ") as Array<string>;
        const firstName = names[0];
        const lastName = names.length > 1 ? names[names.length - 1] : "";
        return [firstName, lastName]
    }

    return ['', '']
}

export default getNames

export const getFirstName = (sessionData: any) => {
    const names = getNames(sessionData)
    return names[0]
}