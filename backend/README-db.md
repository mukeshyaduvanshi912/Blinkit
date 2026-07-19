Run this script to create the required database and tables (requires `mysql` client):

1. Make sure `.env` in `Backend/` has correct DB credentials.
2. Run:

```bash
mysql -u <DB_USER> -p -h <DB_HOST> < init.sql
```

Or from the file's folder (if using `blinkit_db` in the script):

```bash
mysql -u root -p < init.sql
```

After running, restart the backend and test the endpoints (e.g. `GET /api/products`).
