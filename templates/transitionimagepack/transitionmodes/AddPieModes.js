import {
    PieOut, PieIn, PieInOut
} from './Const.js';
import Yoyo from './Yoyo.js';
import CustomProgress from '../../../plugins/customprogress.js';

var CreateMask = function (scene) {
    var maskGameObject = new CustomProgress(scene, {
        type: 'Graphics',
        create: [
            { name: 'pie', type: 'arc' },
        ],
        update: function () {
            var radius = Math.max(this.width, this.height) * 2;
            var deltaAngle = 90 * this.value;

            this.getShape('pie')
                .fillStyle(0xffffff)
                .setCenterPosition(this.centerX, 0)
                .setRadius(radius)
                .setAngle(90 - deltaAngle, 90 + deltaAngle)
                .setPie();

        },
    })
    return maskGameObject;
}

var AddPieModes = function (image) {
    var maskGameObject = CreateMask(image.scene);

    image
        .once('destroy', function () {
            maskGameObject.destroy();
        })
        .addTransitionMode(PieOut, {
            ease: 'Linear', dir: 'out', mask: maskGameObject,

            onStart: function (parent, currentImage, nextImage, t) {
                parent.setCurrentImageMaskEnable(true, true);
            },
            onProgress: function (parent, currentImage, nextImage, t) {
                parent.maskGameObject.setValue(t);
            },
            onComplete: function (parent, currentImage, nextImage, t) {
                parent.removeMaskGameObject(false);
            },
        })
        .addTransitionMode(PieIn, {
            ease: 'Linear', dir: 'in', mask: maskGameObject,

            onStart: function (parent, currentImage, nextImage, t) {
                parent.setNextImageMaskEnable(true);
            },
            onProgress: function (parent, currentImage, nextImage, t) {
                parent.maskGameObject.setValue(1 - t);
            },
            onComplete: function (parent, currentImage, nextImage, t) {
                parent.removeMaskGameObject(false);
            },
        })
        .addTransitionMode(PieInOut, {
            ease: 'Linear', dir: 'out', mask: maskGameObject,

            onStart: function (parent, currentImage, nextImage, t) {
                parent.setChildVisible(nextImage, false);
                parent.setCurrentImageMaskEnable(true, true);
                parent.setNextImageMaskEnable(true);
            },
            onProgress: function (parent, currentImage, nextImage, t) {
                if (t < 0.5) {
                    t = Yoyo(t);
                    parent.maskGameObject.setValue(t);

                } else {
                    if (currentImage.visible) {
                        parent.setChildVisible(currentImage, false);
                    }
                    if (!nextImage.visible) {
                        parent.setChildVisible(nextImage, true);
                    }

                    t = Yoyo(t);
                    parent.maskGameObject.setValue(t);
                }
            },
            onComplete: function (parent, currentImage, nextImage, t) {
                parent.removeMaskGameObject(false);

                parent.setChildVisible(currentImage, true);
                parent.setChildVisible(nextImage, true);
            },
        })

}

export default AddPieModes;