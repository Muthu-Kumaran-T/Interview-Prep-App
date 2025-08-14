const moongoose = require('mongoose');

const userSchema = new moongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profileImageUrl: { type: String, default: null },
    },
    { timestamps: true }
);

module.exports = moongoose.model('User', userSchema);
