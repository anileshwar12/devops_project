# 🚀 Quotes API

A simple Node.js + Express API for quotes, containerized with Docker.

---

## 📦 Setup & Run (on any laptop)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/quotes-api.git
cd quotes-api
```

### 2️⃣ Build Docker Image

```bash
docker build -t quotes-api .
```

### 3️⃣ Run the Container

```bash
docker run -p 3000:3000 quotes-api
```

**If port 3000 is busy**, use another port:

```bash
docker run -p 8080:3000 quotes-api
```

### 4️⃣ Access the API

Open your browser or API client:

- `http://localhost:3000`
- `http://localhost:3000/quote`

---

## 🧰 Common Commands

| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker stop <id>` | Stop a running container |
| `docker images` | Show all images |
| `docker rmi quotes-api` | Remove image |

---

## ✅ Optional: Load from .tar File

If you already have an exported image:

```bash
docker load -i quotes-api.tar
docker run -p 3000:3000 quotes-api
```

---

## 📝 Notes

- Make sure Docker is installed and running on your system
- The API runs on port 3000 by default inside the container
- You can map it to any available port on your host machine
