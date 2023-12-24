import promptSync from 'prompt-sync';
export const getUserName = () => {
    const prompt = promptSync();
    const firstName = prompt('what is your name :- ');
    return `Hello ${firstName}, Nice to meet you!!!`;
};
//# sourceMappingURL=index.js.map