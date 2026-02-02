<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wealth Manager Pro</title>
    <link rel="manifest" href="app.webmanifest?v=2">
    <meta name="theme-color" content="#4f46e5">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root { --primary: #4f46e5; --dark: #0f172a; --bg: #f3f4f6; }
        body { font-family: 'Inter', sans-serif; background: var(--bg); margin: 0; padding: 10px; }
        .dashboard { max-width: 600px; margin: auto; background: white; border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .card { background: var(--dark); color: white; padding: 20px; border-radius: 15px; text-align: center; }
        .btn-main { background: var(--primary); color: white; width: 100%; padding: 12px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="card">
            <div style="font-size: 14px; opacity: 0.8;">Current Balance</div>
            <div style="font-size: 30px; font-weight: 800;">৳<span id="balance">16000</span></div>
        </div>
        <p style="text-align: center; color: #64748b;">App is ready to install!</p>
        <button class="btn-main" onclick="alert('Add Expense feature ready!')">Add Expense</button>
    </div>

    <script>
        // Service Worker register kora hochche sw.js naame
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("./sw.js")
                    .then(reg => console.log("Service Worker Registered!"))
                    .catch(err => console.log("SW Registration Failed:", err));
            });
        }
    </script>
</body>
</html>
