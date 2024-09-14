namespace pokemon_png_converter
{
  public class Program
  {
    const string folderPath = "G:\\poke-calc\\src\\assets\\images";
    const string outputFile= "G:\\poke-calc\\src\\assets\\pokemon.csv";
    const string inputCsvFile = "G:\\poke-calc\\src\\assets\\pokemon.bak.csv";

    public static void Main(string[] args)
    {
      var csvLines = ReadCsvData(inputCsvFile);
      if(csvLines.Length == 0)
      {
        Console.WriteLine("No data in CSV file.");
        return;
      }

      ConvertPngFilesToBase64(folderPath, csvLines);
    }

    public static string[] ReadCsvData(string inputCsvFile)
    {
      if (!File.Exists(inputCsvFile))
      {
        Console.WriteLine("File does not exist.");
        return Array.Empty<string>();
      }

      using (var reader = new StreamReader(inputCsvFile))
      {
        return File.ReadAllLines(inputCsvFile);
      }
    }

    public static void ConvertPngFilesToBase64(string folderPath, string[] csvLines)
    {
      if (!Directory.Exists(folderPath))
      {
        Console.WriteLine("Directory does not exist.");
        return;
      }

      int count = 0;
      string[] pngFiles = Directory.GetFiles(folderPath, "*.png");
      File.WriteAllText(outputFile, "Id,Name,Type1,Type2,StatTotal,Hp,Attack,Defense,SpAtk,SpDef,Speed,Generation,Legendary,Image\n");
      foreach (string filePath in pngFiles)
      {
        try
        {
          byte[] imageBytes = File.ReadAllBytes(filePath);
          string base64String = Convert.ToBase64String(imageBytes);
          //Console.WriteLine($"File: {Path.GetFileName(filePath)}");
          //Console.WriteLine($"Base64: {base64String}");

          var matchedLine = csvLines.FirstOrDefault(line => line.Contains(Path.GetFileNameWithoutExtension(filePath), StringComparison.InvariantCultureIgnoreCase));
          if (matchedLine != null)
          {
            matchedLine += "," + base64String;
            count++;
            //Console.WriteLine(matchedLine);
          }
          else
          {
            //Console.WriteLine("Error: " + base64String);
            continue;
          }

          File.AppendAllText(outputFile, matchedLine + "\n");
        }
        catch (Exception ex)
        {
          Console.WriteLine($"Error converting file {filePath}: {ex.Message}");
        }
      }
      Console.WriteLine("Total Matches: " + count);
    }
  }
}
