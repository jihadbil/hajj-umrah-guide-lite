function readPackage(pkg) {
  if (pkg.name === 'nitro' && pkg.version === '3.0.260603-beta') {
    pkg.version = '3.0.0-beta.260603';
  }
  return pkg;
}

module.exports = { hooks: { readPackage } };
