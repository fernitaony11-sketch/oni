body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
    min-height: 100vh;
}

header {
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    padding: 40px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 32px;
    color: #3e2723;
    margin-bottom: 10px;
}

header p {
    font-size: 18px;
    color: #5d4037;
}

.menu-section {
    width: 90%;
    max-width: 1100px;
    margin: 40px auto;
}

.menu-section h2 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 25px;
    color: #3e2723;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.menu-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 25px;
}

.menu-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    transition: 0.3s;
    text-align: center;
}

.menu-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
}

.menu-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.menu-card h3 {
    margin: 10px;
    color: #3e2723;
}

.menu-card a {
    display: block;
    margin: 10px;
    padding: 10px;
    background: #3e2723;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.2s;
}

.menu-card a:hover {
    background: #5d4037;
}

footer {
    text-align: center;
    background: rgba(62, 39, 35, 0.9);
    color: white;
    padding: 20px;
    margin-top: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
