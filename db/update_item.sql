UPDATE shelves
SET name = $2,
    price = $3
WHERE bin = $1;