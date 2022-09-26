"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'postUser',
        body
    });
};
exports.postUser = postUser;
const deletetUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
    });
};
exports.deletetUser = deletetUser;
//# sourceMappingURL=usuarios.js.map