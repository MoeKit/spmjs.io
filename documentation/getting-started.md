# Getting Started

---

## Introdution

`spm` is a powerful and integrated static package manager designed for the browser-side solutions including JavaScript and Css, and a elegant solution of front-end package management.

![](https://i.alipayobjects.com/i/localhost/png/201404/2YQxOTYoFp.png)

All packages of `spm` is organized by CommonJS, run on [Sea.js](https://github.com/seajs/seajs). We supply a complete lifecycle managment of package by using [spm](https://github.com/spmjs/spm), including initialization, install dependencies, local development, publishing on [spmjs.io](http://spmjs.io), test case runner, documentation host and dist-file build.

[spmjs.io](http://spmjs.io/) is packages management service for spm. You can browse for packages you need, or publish your package here.

## Installation

```
$ npm install spm@ninja -g
```

Add tag `ninja` for the 3.x version, which distinguish from old `spm@2.x`.

## Basic Usage

Init a spm package.

```
$ mkdir example
$ spm init
```

Install dependencies.

```
$ spm install jquery --save
$ spm install moment@2.6.0 --save
```

Publish the package to [spmjs.io](http://spmjs.io/)

```
$ spm publish
```

> You should run `spm login` first to get permission. The `authkey` will be displayed at http://spmjs.io/account after signing in.

Add `.spmignore` for ignoring useless files to avoid oversize of package.

## Contribution

Anyone is welcome to contribute by the following ways.

- [Bug reports](https://github.com/spmjs/spm/issues)
- [Feature requests](https://github.com/spmjs/spm/issues)
- [Pull requests](https://github.com/spmjs/spm/pulls)
