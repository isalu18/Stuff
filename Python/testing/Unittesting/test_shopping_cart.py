import unittest
from shopping_cart import Item, ShoppingCart, NotExistItemError

class TestShoppingCart(unittest.TestCase):

    def setUp(self): #se va a ejecutar antes de las pruebas unitarias.
        print("Metodo setUp, antes de la prueba")
        self.pan = Item("Pan", 3.0)
        self.jugo = Item("Jugo", 4.0)
        self.shopping_cart = ShoppingCart()
        self.shopping_cart.add_item(self.pan)

    def tearDown(self):
        print("Metodo tearDown, despues de la prueba")
        pass


    def test_cinco_mas_cinco(self):
        assert 5 + 5 == 10
    
    def test_nombre_producto_igual_pan(self):
        self.assertEqual(self.pan.name, "Pan")
    
    def test_nombre_producto__dif_jugo(self):
        self.assertNotEqual(self.jugo.name, "Manzana")
    
    def test_contiene_productos(self):
        self.assertTrue(self.shopping_cart.contains_items())
    
    def test_no_contiene_productos(self):
        self.shopping_cart.remove_item(self.pan)
        self.assertFalse(self.shopping_cart.contains_items())
    
    def test_obtener_producto_pan(self):
        item = self.shopping_cart.get_item(self.pan)
        self.assertIs(item, self.pan)
        self.assertIsNot(item, self.jugo)

    def test_exception_obtener_jugo(self):
        with self.assertRaises(NotExistItemError):
            self.shopping_cart.get_item(self.jugo)
    
    def test_total_unproducto(self):
        total = self.shopping_cart.total()
        self.assertGreater(total, 0)
        self.assertLess(total, self.pan.price - 1.0)


if __name__ == '__main__':  #saber si este archivo es el principal
    unittest.main()