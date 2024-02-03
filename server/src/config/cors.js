const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH',
		'OPTIONS'
    ],

    allowedHeaders: [
        'Content-Type',
        'authorization',
		'Allow-Control-Allow-Origin'
    ],
};

module.exports = corsOpts; 