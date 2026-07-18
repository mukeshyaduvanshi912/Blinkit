CREATE TABLE IF NOT EXISTS cart_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY customer_product_unique (customer_id, product_id),
  FOREIGN KEY (customer_id) REFERENCES blinkit_db.customers(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES blinkit_db.products(id) ON DELETE CASCADE
) ENGINE=InnoDB;