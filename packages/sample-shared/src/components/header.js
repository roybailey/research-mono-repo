var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var children = this.props.children;
        var styles = {
            header: {
                height: 54,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
                backgroundColor: '#2196f3',
                color: '#ffffff',
            },
            heading: {
                fontSize: 20,
                fontWeight: 'normal',
            },
        };
        return (React.createElement("div", { style: styles.header },
            React.createElement("h1", { style: styles.heading }, children)));
    };
    return Header;
}(React.Component));
export { Header };
//# sourceMappingURL=header.js.map