React does not render `false`,`null`,`undefined`,or`nan` in the DOM .these values ,when used in jsx , will result in nothing being displayed.

however `0` and empty strings (`""`) are execptions:

-**`0`** is rendered in the DOM because iy is considered as valid react node . this means that if `0` is the result of expression , it will appear in your UI.

-**empty strings**(`""`) are also considered valid and also rendered as well.
