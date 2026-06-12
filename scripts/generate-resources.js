const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType } = require("docx");
const ExcelJS = require("exceljs");

const OUT_DIR = path.join(__dirname, "..", "public", "resources");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function generateAprDocx() {
  const doc = new Document({
    title: "Template APR Profissional",
    description: "Modelo de Análise Preliminar de Riscos conforme NR-01",
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "TEMPLATE APR PROFISSIONAL",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({ spacing: { after: 200 } }),
        new Paragraph({ text: "Empresa: ________________________________________", spacing: { after: 100 } }),
        new Paragraph({ text: "Data: ____/____/________", spacing: { after: 100 } }),
        new Paragraph({ text: "Atividade: ________________________________________", spacing: { after: 100 } }),
        new Paragraph({ text: "Local: ________________________________________", spacing: { after: 200 } }),
        new Paragraph({
          text: "Identificação de Perigos e Riscos",
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({ spacing: { after: 100 } }),
        createTable([
          ["Etapa", "Perigo", " Risco", "Medida de Controle", "Responsável"],
          ["Preparação", "Trabalho em altura", "Queda", "EPI completo, linha de vida", "TST"],
          ["Execução", "Esforço repetitivo", "LER/DORT", "Pausas programadas", "Operador"],
          ["Finalização", "Desorganização", "Tropeco/queda", "Checklist final", "Supervisor"],
        ]),
        new Paragraph({ spacing: { after: 400 } }),
        new Paragraph({
          text: "Assinaturas",
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({ spacing: { after: 100 } }),
        new Paragraph({ text: "TST: ___________________________", spacing: { after: 100 } }),
        new Paragraph({ text: "Gestor: ___________________________", spacing: { after: 100 } }),
        new Paragraph({ text: "Data: ____/____/________", spacing: { after: 100 } }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(OUT_DIR, "template-apr-profissional.docx"), buffer);
  console.log("✓ template-apr-profissional.docx");
}

function createTable(rows) {
  const tableRows = rows.map((row, i) => new TableRow({
    children: row.map((cell) => new TableCell({
      children: [new Paragraph({
        children: [new TextRun({ text: cell, bold: i === 0, size: i === 0 ? 20 : 18 })],
      })],
      width: { size: 2000, type: WidthType.DXA },
    })),
  }));

  return new Table({
    rows: tableRows,
    width: { size: 100, type: WidthType.PERCENTAGE },
  });
}

async function generateNr10Xlsx() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "SGS Segurança";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Checklist NR-10");

  sheet.columns = [
    { header: "Item", key: "item", width: 40 },
    { header: "Conforme", key: "conforme", width: 15 },
    { header: "Não Conforme", key: "nc", width: 15 },
    { header: "N/A", key: "na", width: 10 },
    { header: "Observações", key: "obs", width: 40 },
  ];

  const headerStyle = {
    font: { bold: true, color: { argb: "FFFFFFFF" }, size: 11 },
    fill: { type: "pattern", pattern: "solid", fgColor: { argb: "FF1E3A5F" } },
    alignment: { horizontal: "center", vertical: "center" },
    border: {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    },
  };

  const cellStyle = {
    alignment: { horizontal: "center", vertical: "center" },
    border: {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    },
  };

  const items = [
    "1. Esquema de aterramento",
    "2. Disjuntores identificados",
    "3. Cabos sem emendas",
    "4. Quadros elétricos trancados",
    "5. EPIs disponíveis (luvas, botas)",
    "6. Treinamento NR-10 vigente",
    "7. Sinalização de área energizada",
    "8. Procedimentos de bloqueio (LOTO)",
    "9. Ferramentas isoladas",
    "10. Prontuário de instalações",
  ];

  sheet.getRow(1).height = 30;
  sheet.getRow(1).eachCell((cell) => {
    cell.font = headerStyle.font;
    cell.fill = headerStyle.fill;
    cell.alignment = headerStyle.alignment;
    cell.border = headerStyle.border;
  });

  items.forEach((item, i) => {
    const row = sheet.getRow(i + 2);
    row.getCell(1).value = item;
    row.getCell(1).alignment = { horizontal: "left", vertical: "center" };
    row.getCell(1).font = { bold: true, size: 10 };
    for (let c = 2; c <= 5; c++) {
      row.getCell(c).alignment = cellStyle.alignment;
      row.getCell(c).border = cellStyle.border;
    }
    row.getCell(1).border = cellStyle.border;
    row.height = 28;
  });

  const summaryRow = sheet.addRow({});
  summaryRow.getCell(1).value = "Auditor: ________________________";
  summaryRow.getCell(1).font = { bold: true, size: 11 };
  sheet.addRow({}).getCell(1).value = "Data: ____/____/________";

  await workbook.xlsx.writeFile(path.join(OUT_DIR, "checklist-auditoria-nr10.xlsx"));
  console.log("✓ checklist-auditoria-nr10.xlsx");
}

async function generatePdfSimple(filename, title, content) {
  const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj

2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj

3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
   /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj

4 0 obj
<< /Length ${150 + content.length * 2} >>
stream
BT
/F1 24 Tf
50 740 Td
(${escapePdfString(title)}) Tj
/F1 12 Tf
50 700 Td
(.) Tj
${generatePdfText(content, 50, 680)}
ET
endstream
endobj

5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000${450 + content.length * 2} 00000 n 

trailer
<< /Size 6 /Root 1 0 R >>
startxref
${500 + content.length * 2}
%%EOF`;

  fs.writeFileSync(path.join(OUT_DIR, filename), pdfContent);
  console.log(`\u2713 ${filename}`);
}

function escapePdfString(str) {
  return str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function generatePdfText(text, x, startY) {
  const lines = text.split("\n");
  let output = "";
  let y = startY;
  for (const line of lines) {
    if (line.trim() === "") {
      y -= 16;
      continue;
    }
    const truncated = line.substring(0, 80);
    output += `/${escapePdfString(truncated)} Tj\n`;
    y -= 18;
  }
  const cleaned = output.replace(/\//g, "(");
  return `1 0 0 1 ${x} ${y} Tm\n${cleaned}`;
}

async function generateAll() {
  console.log("Generating resource files...\n");

  await generateAprDocx();
  await generateNr10Xlsx();

  const ebookContent = `O Guia da Rastreabilidade em SST

1. Por que a rastreabilidade e vital?
A rastreabilidade em SST transforma dados operacionais em ativos juridicos. Cada APR, DDS e PT registrado com evidencia fotografica e assinatura digital cria uma cadeia de custodia que protege a empresa em auditorias e fiscalizacoes.

2. Fotos como provas juridicas
Fotos com metadados (data, hora, geolocalizacao) vinculadas a documentos de SST tem valor juridico comprovado. O SGS captura esses dados automaticamente.

3. O ciclo APR, DDS e PT
APR identifica riscos -> DDS comunica a equipe -> PT autoriza a execucao. Cada etapa deve gerar evidencias vinculadas.

4. Auditorias em tempo recorde
Com dados centralizados e rastreaveis, uma auditoria ISO 45001 que levaria semanas pode ser concluida em horas.

5. IA na governanca de SST
A Sophie (IA do SGS) analisa fotos de campo, identifica não conformidades e sugere correcoes automaticamente.`;

  const ptContent = `Modelo de PT para Trabalho em Altura

PERMISSAO DE TRABALHO N: ________
Data: ____/____/________
Atividade: Trabalho em altura
Local: ________________________

REQUISITOS OBRIGATORIOS:
[ ] Treinamento NR-35 valido
[ ] ASO compativel com a atividade
[ ] EPIs inspecionados (cinto, talabarte, trava-quedas)
[ ] Ancoragem verificada por profissional habilitado
[ ] Plano de emergencia elaborado
[ ] Sinalizacao da area isolada
[ ] Condicoes climaticas favoraveis

EQUIPE:
Executor: ________________________
Responsavel tecnico: ________________________
TST: ________________________

VALIDADE: ____/____/________ as ____:____
ENCERRAMENTO: ____/____/________ as ____:____`;

  await generatePdfSimple("guia-rastreabilidade-sst.pdf", "Guia da Rastreabilidade em SST", ebookContent);
  await generatePdfSimple("modelo-pt-altura.pdf", "Modelo PT para Altura", ptContent);

  console.log("\nAll resource files generated successfully!");

  const files = fs.readdirSync(OUT_DIR);
  for (const file of files) {
    const stat = fs.statSync(path.join(OUT_DIR, file));
    console.log(`  ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

generateAll().catch(console.error);
