export const StringType = 0;
export const RegexType = 1;

export const TopLevelCommandTypes = [
    { name: 'condition' },
    { name: 'catch' },
];

export const HeadingCommand = [
    {
        name: 'if',
        pattern: new RegExp('if\\s*(.*)', 'i')
    },
    { name: 'else' },
    {
        name: 'while',
        pattern: new RegExp('while\\s*(.*)', 'i')
    },
    {
        name: 'repeat',
        pattern: new RegExp('repeat\\s*(.*)', 'i')
    },
];

export const ActionCommandTypes = [
    { name: 'exit' },
    { name: 'break' },
    {
        name: 'next round',
        pattern: new RegExp('next\\s*(.*)\\s*round', 'i')
    },
    { 
        name: 'activate',
        pattern: new RegExp('activate\\s*(.*)', 'i')
    },
    { 
        name: 'deactivate',
        pattern: new RegExp('deactivate\\s*(.*)', 'i')
    },
];