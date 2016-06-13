"use strict";

System.register(["./message"], function (_export, _context) {
    "use strict";

    var Message, LeaveMessage;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_message) {
            Message = _message.Message;
        }],
        execute: function () {
            _export("LeaveMessage", LeaveMessage = function (_Message) {
                _inherits(LeaveMessage, _Message);

                function LeaveMessage(channel) {
                    _classCallCheck(this, LeaveMessage);

                    return _possibleConstructorReturn(this, _Message.call(this, LeaveMessage.EVENT, channel));
                }

                return LeaveMessage;
            }(Message));

            _export("LeaveMessage", LeaveMessage);

            LeaveMessage.EVENT = "user-left";
        }
    };
});