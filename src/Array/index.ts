import promptSync from 'prompt-sync';


export const getConsole = () => {
    const prompt = promptSync();

    const firstName = prompt('what is your name :- ');

    return `Hello ${firstName}, Nice to meet you!!!`;
};

