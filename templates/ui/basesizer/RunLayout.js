// Override
var RunLayout = function (parent, minWidth, minHeight) {
    // Skip hidden or !dirty sizer
    if (this.ignoreLayout) {
        return this;
    }

    var isTopmostParent = !parent;
    // Preprocessor, top parent only
    if (isTopmostParent) {
        this.preLayout();
    }

    // Calculate parent width
    var newWidth = this.resolveWidth(minWidth);
    // Calculate all children width, run width wrap
    if (isTopmostParent) {
        this.resolveChildrenWidth(newWidth);
        this.runWidthWrap(newWidth);
    }
    // Calculate parent height
    var newHeight = this.resolveHeight(minHeight);
    // Resize parent
    this.resize(newWidth, newHeight);

    // Layout children    
    this.layoutChildren();

    // Layout background children
    this.layoutBackgrounds();

    return this.postLayout();
}
export default RunLayout;