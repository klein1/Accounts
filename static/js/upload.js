function DragImgUpload(id, options) {
    this.me = $(id);
    var defaultOpt = {boxWidth: '350px', boxHeight: 'auto'}
    this.preview = $('<div id="preview" style="background: url(/static/img/upload.png) no-repeat center;background-size: 140px"><img src="" class="img-responsive"  style="width: 100%;height: auto;margin:auto;min-height: 350px" alt="" title=""> </div>');
    this.opts = $.extend(true, defaultOpt, {}, options);
    this.init();
    this.callback = this.opts.callback;
}
DragImgUpload.prototype = {
    init: function () {
        this.me.append(this.preview);
        // this.me.append(this.fileupload);
        this.cssInit();
        this.eventClickInit();
    }, cssInit: function () {
        this.me.css({
            'width': this.opts.boxWidth,
            'height': this.opts.boxHeight,
            'border': '1px dashed #cccccc',
            'padding': '10px',
            'cursor': 'pointer'
        });
        this.preview.css({'height': '100%', 'overflow': 'hidden'})
    }, eventClickInit: function () {
        var self = this;
        this.me.unbind().click(function () {
            self.createImageUploadDialog();
        });
    }, onChangeUploadFile: function () {
        var fileInput = this.fileInput;
        var files = fileInput.files;
        var file = files[0];
        if (file) {
            var img = window.URL.createObjectURL(file);
            var filename = file.name;
            this.me.find("img").attr("src", img);
            this.me.find("img").attr("title", filename);
            this.me.find("img").css('min-height', '');
            this.preview.css('background', '');
        }
        else {
            this.me.find("img").attr("src", '');
            this.me.find("img").attr("title", '');
            this.me.find("img").css("min-height", '350px');
            this.preview.css('background', 'url(/static/img/upload.png) no-repeat center');
        }
        if (this.callback) {
            this.callback(files);
        }
    }, createImageUploadDialog: function () {
        var fileInput = this.fileInput;
        if (!fileInput) {
            // fileInput = document.createElement('input');
            fileInput = document.getElementById('file');
            fileInput.type = 'file';
            fileInput.name = 'img';
            // fileInput.multiple = true;
            fileInput.onchange = this.onChangeUploadFile.bind(this);
            this.fileInput = fileInput;
        }
        fileInput.click();
    }
};