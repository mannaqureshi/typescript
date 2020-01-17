"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var tail = this.head;
            var length = 0;
            while (tail) {
                tail = tail.next;
                length++;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter == index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        throw new Error("Index Out Of Bounds");
    };
    LinkedList.prototype.compare = function (i, j) {
        return this.at(i).data > this.at(j).data;
    };
    LinkedList.prototype.swap = function (i, j) {
        var _a;
        _a = [this.at(j).data, this.at(i).data], this.at(i).data = _a[0], this.at(j).data = _a[1];
    };
    LinkedList.prototype.print = function () {
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
