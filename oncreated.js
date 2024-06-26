export const meta = {
    type: 'problem',
    docs: {
        description: 'require super() call in OnCreated method of classes extending BaseModifier',
        category: 'Best Practices',
        recommended: false,
    },
    schema: [], // no options
    messages: {
        missingSuper: 'OnCreated method in class extending BaseModifier must call super.OnCreated().',
    },
};
export function create(context) {
    return {
        MethodDefinition(node) {
            if (node.key.name !== 'OnCreated') {
                return;
            }

            const classDeclaration = node.parent.parent;
            const heritage = classDeclaration.superClass;

            if (!heritage || heritage.name !== 'BaseModifier') {
                return;
            }

            let superCallFound = false;
            context
                .getSourceCode()
                .getTokens(node.value.body)
                .forEach(token => {
                    if (token.value === 'super') {
                        superCallFound = true;
                    }
                });

            if (!superCallFound) {
                context.report({
                    node: node,
                    messageId: 'missingSuper',
                });
            }
        },
    };
}
