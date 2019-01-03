exports.handler = async function(event, context) {
    const {identity, user} = context.clientContext;
    return {
        statusCode: 200,
        body: `Hello, ${JSON.stringify(user)}`
    }
}