import { calculateSubtotalFromItems } from "../../lib/order";

export default function handler(req, res) {
  const { discount, tax, items } = req.body;

  const subtotal = calculateSubtotalFromItems(items)

  let total = subtotal;

  if ( discount > 0 ) {
    total = total - ( total * discount );
  }

  if ( tax > 0 ) {
    total = total + ( total * tax );
  }

  res.status(200).json({
    items,
    discount,
    tax,
    subtotal,
    total
  });

  
}

