class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const symbol = word[i];
            if (!node.children[symbol]) {
                node.children[symbol] = new TrieNode(symbol);
            }
            node = node.children[symbol];

            if (i === word.length - 1) {
                node.isWord = true;
            }
        }
    }

    hasNode(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const symbol = word[i];
            if (!node.children[symbol]) {
                return false; // Если символ отсутствует, слова нет
            }
            node = node.children[symbol];
        }
        return node.isWord; // Проверяем, является ли узел концом слова
    }

    getAllNodes() {
        const nodes = [];
        const stack = [this.root]; // Используем стек для обхода в глубину (DFS)

        while (stack.length > 0) {
            const node = stack.pop();
            nodes.push(node);
            for (const child in node.children) {
                stack.push(node.children[child]);
            }
        }

        return nodes;
    }
}

module.exports = { Trie };
