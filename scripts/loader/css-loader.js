const path = require('path');


// 自定义类名生成函数（与开发环境一致）
 const getLocalIdent = (pkg,context, localIdentName, localName, options) => {

    const resourcePath = context.resourcePath; // 当前 SCSS 文件绝对路径
    const dirPath = path.dirname(resourcePath); // 文件所在目录路径（如：/src/components/afc）
    const parentFolderName = path.basename(dirPath); // 父文件夹名称（如：afc）

    // 生成 5 位哈希（基于原始类名 + 父文件夹名）
    const hash = require('crypto').createHash('md5')
        .update(localName + parentFolderName)
        .digest('hex')
        .substr(0, 5); // 取前 5 位
    return `${pkg.name}_${parentFolderName}_${hash}`; // 最终类名：afc_xxxx
};
 exports.getLocalIdent = getLocalIdent;