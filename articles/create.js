'use strict';

module.exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    if (data.text && typeof data.text !== 'string'){
        console.error('Validation Failed');
        callback(new Error('O corpo nao contem propriedade'));
        return;

    }
    console.log(data.txt);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Create article'
        }),
    };
    callback(null, response);
}

