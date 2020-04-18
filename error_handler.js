module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    console.log(err.message)
    if (typeof (err) === 'string') {
        // pour les erreurs personnalisées
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // Erreur mongoose
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        // erreur d'authentificaton avec JWT
        return res.status(401).json({ message: 'Jeton(Token) invalide' });
    }

    // Erreur de serveur
    
    return res.status(500).json({ message: err.message });
}