module.exports = {
    login: (req, res) => {
        return res.render('login')
    },
    profile: (req, res) => {
        return res.render('profile')
    },
    register: (req, res) => {
        return res.render('register')
    }
}