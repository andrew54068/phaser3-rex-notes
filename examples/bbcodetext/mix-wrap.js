import phaser from 'phaser/src/phaser.js';
import BBCodeTextPlugin from '../../plugins/bbcodetext-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        var s1 = '你好世界 你好世界 你好世界 Hello world Hello world Hello world';

        this.add.text(100, 0, 'Text with word wrap');
        this.add.text(100, 30, s1, {
            fixedWidth: 180,
            backgroundColor: '#555',
            fontSize: '20px',
            wordWrap: {
                width: 180
            },
        })

        // Character wrap
        this.add.text(100, 150, 'BBCodeText with word wrap');
        this.add.rexBBCodeText(100, 180, s1, {
            fixedWidth: 180,
            backgroundColor: '#555',
            fontSize: '20px',
            wrap: {
                mode: 'word',
                width: 180
            },
        });

        // Chatavter wrap
        this.add.text(500, 150, 'BBCodeText with character wrap');
        this.add.rexBBCodeText(500, 180, s1, {
            fixedWidth: 180,
            backgroundColor: '#555',
            fontSize: '20px',
            wrap: {
                mode: 'char',
                width: 180
            },
        });

        //Mix wrap
        this.add.text(100, 300, 'BBCodeText with mix wrap');
        this.add.rexBBCodeText(100, 330, s1, {
            fixedWidth: 180,
            backgroundColor: '#555',
            fontSize: '20px',
            wrap: {
                mode: 'mix',
                width: 180,
            },
        });
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        global: [{
            key: 'BBCodeTextPlugin',
            plugin: BBCodeTextPlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);