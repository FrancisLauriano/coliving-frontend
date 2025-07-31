// pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/not-found.png";

const NotFound = () => {
    return (
        <div style={styles.container}>
            <img src={notFoundImage} alt="not found cat" />
            <h1 style={styles.header}>404 - Não encontrei!</h1>
            <p style={styles.paragraph}>Oopa! Aparentemente essa página não existe.</p>
            <Link to="/" style={styles.link}>
                Voltar para Home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Inter",
        textAlign: "center",
        backgroundColor: "#ffffff",
    },
    header: {
        fontSize: "3rem",
        marginBottom: "1rem",
    },
    paragraph: {
        fontSize: "1.5rem",
        marginBottom: "2rem",
    },
    link: {
        fontSize: "1.2rem",
        color: "#f077d6",
        textDecoration: "none",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
};


export default NotFound;



