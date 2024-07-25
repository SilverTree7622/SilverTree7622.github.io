
const UtilString = {
    convertLong2ShortName: (fullName: string): string => {
        const nameParts = fullName.trim().split(" ");
        if (nameParts.length < 2) {
            console.warn("The provided name must include at least a first name and a last name.");
        }
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1];
        const shortName = `${firstName.charAt(0).toUpperCase()}.${lastName.toLowerCase()}`;
        return shortName;
    },
};

export default UtilString;