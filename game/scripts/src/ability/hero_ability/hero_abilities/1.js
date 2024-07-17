const fs = require('fs');
const path = require('path');

// 获取脚本所在目录
const scriptDirectory = __dirname;
const scriptFilename = path.basename(__filename);

// 递归处理子目录中的文件
const processFiles = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Failed to read directory: ${dir}`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Failed to get stats of file: ${filePath}`, err);
          return;
        }

        if (stats.isDirectory()) {
          // 递归处理子目录
          processFiles(filePath);
        } else if (stats.isFile() && file === '_index.ts') {
          // 处理 _index.ts 文件
          processIndexFile(filePath);
        }
      });
    });
  });
};

// 处理 _index.ts 文件
const processIndexFile = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Failed to read file: ${filePath}`, err);
      return;
    }

    // 修改 import 语句
    let updatedData = data.replace(/import '\.\/(.*)';/g, (match, p1) => {
      return `import './imba_${p1}';`;
    });

    // 修改 HeroAbility 枚举常量
    updatedData = updatedData.replace(/(\*\* .+ \*\/\s+)([a-z_]+) = '([a-z_]+)',/g, (match, comment, enumKey, enumValue) => {
      return `${comment}imba_${enumKey} = 'imba_${enumValue}',`;
    });

    // 写回文件
    fs.writeFile(filePath, updatedData, 'utf-8', (err) => {
      if (err) {
        console.error(`Failed to write file: ${filePath}`, err);
      } else {
        console.log(`Processed file: ${filePath}`);
      }
    });
  });
};

// 开始处理脚本目录下的所有子目录
fs.readdir(scriptDirectory, (err, files) => {
  if (err) {
    console.error(`Failed to read script directory: ${scriptDirectory}`, err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(scriptDirectory, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(`Failed to get stats of file: ${filePath}`, err);
        return;
      }

      if (stats.isDirectory()) {
        // 处理子目录
        processFiles(filePath);
      }
    });
  });
});
