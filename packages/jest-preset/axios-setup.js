// In node, we need axios to use it’s `http` adapter otherwise it will fall over (default adapter is `xhr`)
// If XMLHttpRequest exists, Axios assumes it's running in a browser environment. However, Jest run the tests in an
// environment where XmlHttpRequest is present (even though it's running in node).
global.XMLHttpRequest = undefined;
