// Este script de ignition funciona... desplegó el contrato para el primer tp
// npx hardhat ignition deploy ./ignition/modules/Token.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token");

  return { token };
});

module.exports = TokenModule;